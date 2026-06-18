from pathlib import Path
from PyPDF2 import PdfReader
p = Path(r'd:\developer-portfolio-nextjs-main\Gaurav Lomte Resume.pdf')
r = PdfReader(p)
print("\n".join([f"--- PAGE {i+1} ---\n" + (page.extract_text() or "") for i,page in enumerate(r.pages)]))
