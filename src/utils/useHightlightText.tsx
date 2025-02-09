const useHighlightText = () => {
  return (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, '<mark class="bg-green-300">$1</mark>');
  };
};

export default useHighlightText;
