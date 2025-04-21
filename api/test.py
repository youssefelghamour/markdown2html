from markdown2html import convert

markdown_content = "## TEST README\n**Bold Text**\n- List item 1\n- List item 2"
html_content = convert(markdown_content)
print(html_content)