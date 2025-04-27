#!/usr/bin/python3
""" module for a script that converts from markdown to html """
import re
import hashlib


def convert(markdown_text):
    """ Script that takes an input markdown text and converts it to HTML
    """
    result = []
    content = markdown_text.splitlines()

    # Flag for unordered list
    in_ul_list = False
    # Flag for ordered list
    in_ol_list = False
    # Flag for paragraph
    in_paragraph = False
    # Flag for code block
    in_code_block = False


    for i in range(len(content)):
        line = content[i]
        
        # Handle code blocks (4 spaces indentation)
        if line.startswith('    '):
            # If the line starts with 4 spaces (tab), treat it as code block
            # First break out of the paragraph if we're in one
            if in_paragraph:
                result.append("</p>\n")
                in_paragraph = False
            
            # If it's the first line of the code block
            if not in_code_block:
                result.append("<pre><code>")
                in_code_block = True
            
            line = line[4:]  # Remove the 4 spaces indentation

            # Add the line to the code block
            result.append(f"{line}\n")
            continue
        else:
            # If the line doesn't start with 4 spaces, close the code block if it was open   
            if in_code_block:
                # Close the code block
                result.append("</code></pre>\n")
                in_code_block = False
            line = line.strip()  # Remove leading and trailing spaces
        

        start_index = None
        end_index = None
        
        # Process for ((content))
        if '((' in line and '))' in line:
            start_index = line.find('((')
            # Looking for )) starting from the position start_index
            end_index = line.find('))', start_index)
            # Extract the substring (between (( )) ) and apply the replacement
            substr = line[start_index + 2:end_index]
            # Remove all 'c' & 'C' characters
            substr = substr.replace('c', '').replace('C', '')
            # Replace the original substring with the modified one
            line = line[:start_index] + substr + line[end_index + 2:]

        # Process for [[content]]
        if '[[' in line and ']]' in line:
            start_index = line.find('[[')
            end_index = line.find(']]', start_index)
            substr = line[start_index + 2:end_index]
            # Covert substring to MD5 hash
            md5_hash = hashlib.md5(substr.encode()).hexdigest()
            line = line[:start_index] + md5_hash + line[end_index + 2:]


        # the third argument 1 is to replace only one occurence, otherwise  the replace will replace all the ** on the line
        # Replace the first  ** with the opening bold tag
        line = line.replace('**', '<b>', 1)
        # Replace the second ** with the closing bold tag
        line = line.replace('**', '</b>', 1)

        # Replace the first  __ with the opening emphasis tag
        line = line.replace('__', '<em>', 1)
        # Replace the second __ with the closing emphasis tag
        line = line.replace('__', '</em>', 1)

        # Handle headings
        if line.startswith('#'):
            # count the number of # symbols
            level = line.count('#')
            # remove the #s and extra spaces
            heading_text = line.strip('#').strip()
            html_tag = f"<h{level}>{heading_text}</h{level}>"
            result.append(html_tag + '\n')
            # Skip the next checks and go straight to next iteration
            continue


        # Handle unordered lists
        if line.startswith('-'):
            # if it's the first list element
            if not in_ul_list:
                # First break out of the paragraph if we're in one
                if in_paragraph:
                    result.append("</p>\n")
                    in_paragraph = False
                    
                result.append("<ul>\n")
                # set the flag that indicates that we're inside the list to true
                in_ul_list = True
            list_item = line.strip('-').strip()
            result.append(f"\t<li>{list_item}</li>\n")
            continue
        else:
            # Close <ul> if not in a list item anymore
            if in_ul_list:
                result.append("</ul>\n")
                in_ul_list = False
        

        # Handle ordered lists
        if line.startswith('*'):
            # if it's the first list element
            if not in_ol_list:
                # First break out of the paragraph if we're in one
                if in_paragraph:
                    result.append("</p>\n")
                    in_paragraph = False

                result.append("<ol>\n")
                # set the flag that indicates that we're inside the list to true
                in_ol_list = True
            list_item = line.strip('*').strip()
            result.append(f"\t<li>{list_item}</li>\n")
            continue
        else:
            # Close <ul> if not in a list item anymore
            if in_ol_list:
                result.append("</ol>\n")
                in_ol_list = False
        

        # Handle paragraphs
        if line.strip():
            if not in_paragraph:
                result.append("<p>\n")
                in_paragraph = True
            
            # Handle inline code (single backticks)
            # . = any char, * = any number of occurence, ? = one group per time
            # \1 replace the mactched group 1
            line = re.sub(r'`(.*?)`', r'<code>\1</code>', line)
        
            # Add the line to the paragraph
            result.append(f"\t{line.strip()}\n")

            # If there's a next line and it's not empty, add a <br/> tag
            # This is to avoid adding <br/> at the end of the paragraph
            if i+1 < len(content) and content[i+1].strip():
                result.append("\t\t<br/>\n")
        else:
            if in_paragraph:
                result.append("</p>\n")
                in_paragraph = False


    # Close any open tags at the end
    if in_ul_list:
        result.append("</ul>\n")
    if in_ol_list:
        result.append("</ol>\n")
    if in_paragraph:
        result.append("</p>\n")
    if in_code_block:
        result.append("</code></pre>\n")
    
    return ''.join(result)