import React, { FC, useState } from "react";
import { Transition } from "@headlessui/react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const TransitionMain: FC = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Transition
      show
      appear
      enter="transition-all duration-300"
      enterFrom="opacity-0 translate-x-full "
      enterTo="opacity-100 translate-x-0"
      leave="transition-all duration-300"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 -translate-x-full"
      entered="遷移完了後"
      beforeEnter={() => console.log("beforeEnter")}
      afterEnter={() => console.log("afterEnter")}
      beforeLeave={() => console.log("beforeLeave")}
      afterLeave={() => console.log("afterLeave")}
      className="flex h-full w-full flex-col  items-center justify-center"
    >
      <button
        onClick={() => setIsShowing(!isShowing)}
        className="button z-[100]"
        type="button"
      >
        Toggle
      </button>
      <p>open = {isShowing.toString()}</p>
      {/*         
        enter="入ってくるときのアニメーション設定"
        enterFrom="入ってくるときの初期値"
        enterTo="入り終わったときの値"
        leave="消えるときのアニメーション設定"
        leaveFrom="消えるときの初期値"
        leaveTo="消え終わるときの値" */}

      {/* asにより要素を選択できる初期値はdiv */}
      <Transition
        as="a"
        href="https://tailwindcss.com/"
        show={isShowing}
        enter="transition-all duration-300"
        enterFrom="opacity-0 translate-x-full"
        enterTo="opacity-100 translate-x-0 "
        leave="transition-all duration-300"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 -translate-x-full"
      >
        <p className="rounded-md bg-gray-600 p-4 text-white">
          I will fade in and out
        </p>
      </Transition>

      {/* Transition.Child -> 親要素の表示状態によって表示される。
      modalの背景などに使う */}
      <Transition show={isShowing}>
        <Transition.Child
          enter="transition-all ease-linear duration-300"
          enterFrom="opacity-0 bg-transparent"
          enterTo="opacity-100 bg-black/70"
          leave="transition-all ease-linear duration-300"
          leaveFrom="opacity-100 bg-black/70"
          leaveTo="opacity-0 bg-transparent"
          className="fixed inset-0 z-40"
        />

        {/* Sliding sidebar */}
        <Transition.Child
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="fixed left-0 top-0 z-50 h-screen w-[80%] bg-white sm:w-[60%] md:w-[45%]"
        >
          <IoMdCloseCircleOutline
            className="h-16 w-16 cursor-pointer"
            onClick={() => setIsShowing(false)}
          />
        </Transition.Child>
      </Transition>
    </Transition>
  );
};

export default TransitionMain;
