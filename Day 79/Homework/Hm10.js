const tag = prompt("Enter a tag name (e.g. div, p, img):");
if (tag) {
    const elements = document.getElementsByTagName(tag);
    alert(`There are ${elements.length} <${tag}> elements on this page.`);
}