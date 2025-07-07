const paragraphs = document.getElementsByTagName("p");

for (let i = 0; i < paragraphs.length; i++) {
    const text = paragraphs[i].textContent.trim();
    const wordCount = text.split(/\s+/).length;
    console.log(`Paragraph ${i + 1} has ${wordCount} words`);
}