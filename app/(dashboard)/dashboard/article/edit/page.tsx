import MarkdownEditor from "@components/md-editor/MdEditor";

export default function ArticleEdit() {
  return (
    <div className="flex justify-between w-full h-full">
      <div className="w-32">文章列表</div>
      <div className="flex-1 h-full">
        <MarkdownEditor className={"bg-dark text-white"} />
      </div>
    </div>
  );
}
