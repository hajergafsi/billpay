"use client";
import React, { useEffect, useState } from "react";
import { ContentState, convertFromHTML, EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from "draft-convert";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getPrivacyPolicy, updatePrivacyPolicyText } from "@/redux/actions";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
type Props = {};

const Page = (props: Props) => {
  const { text } = useAppSelector((state) => state.privacyPolicy);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const router = useRouter();

  const dispatch = useAppDispatch();
  const [convertedContent, setConvertedContent] = useState<string | null>(null);
  useEffect(() => {
    dispatch(getPrivacyPolicy());
  }, []);

  useEffect(() => {
    const initialHtml = text;
    const initialEditorState = createContentFromHTML(initialHtml);
    setEditorState(initialEditorState);
    setConvertedContent(initialHtml);
  }, [text]);

  // Function to convert HTML to Draft.js ContentState
  const createContentFromHTML = (html: string) => {
    const blocksFromHTML = convertFromHTML(html);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    return EditorState.createWithContent(state);
  };

  const submit = () => {
    if (convertedContent)
      dispatch(updatePrivacyPolicyText(convertedContent)).then(() => {
        router.push("/dashboard");
      });
  };

  // Function to handle editor state change
  const handleEditorStateChange = (state: EditorState) => {
    setEditorState(state);
    const html = convertToHTML(state.getCurrentContent());
    setConvertedContent(html);
  };

  console.log(convertedContent);

  return (
    <div className="pb-12">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <button
        onClick={submit}
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </div>
  );
};

export default Page;

const primary = "";
