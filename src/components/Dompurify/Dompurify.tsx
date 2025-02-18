import DOMPurify from "dompurify";
//config dompurify để tránh xss

const SafeContent: React.FC<{ html: string }> = ({ html }) => {
  const sanitizedHTML = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
};
export default SafeContent;
