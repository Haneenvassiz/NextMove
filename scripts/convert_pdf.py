import fitz  # PyMuPDF
import sys

def convert_pdf_to_image(pdf_path, output_path):
    doc = fitz.open(pdf_path)
    page = doc.load_page(0)  # first page
    pix = page.get_pixmap(alpha=True, dpi=300)
    pix.save(output_path)

if __name__ == "__main__":
    pdf_path = sys.argv[1]
    output_path = sys.argv[2]
    convert_pdf_to_image(pdf_path, output_path)
