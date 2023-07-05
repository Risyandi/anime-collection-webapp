const convertHtmlToText = (html: any) => {
  const element = document.createElement("div");
  element.innerHTML = html;
  return element.textContent || element.innerText || "";
};

const truncateText = (text: string, maxLength: number) => {
  if (text !== undefined && text !== "") {
    if (text.length > maxLength) {
      text = text.substring(0, maxLength - 1) + "…";
    }
  } else {
    text = "-";
  }
  return text;
};

export { convertHtmlToText, truncateText };
