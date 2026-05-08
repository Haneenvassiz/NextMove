import re

with open('public/logo.svg', 'r') as f:
    content = f.read()

# Add fill="#ffffff" to paths that don't have a fill attribute
content = re.sub(r'<path(?![^>]*fill=)', r'<path fill="#ffffff"', content)

with open('public/logo.svg', 'w') as f:
    f.write(content)
