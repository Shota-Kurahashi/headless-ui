import { Tab, Transition } from "@headlessui/react";
import React, { useState } from "react";
import { LazyMotion, m, domMax } from "framer-motion";

const TabsMain = () => {
  const [_, setSelectedIndex] = useState(0);

  return (
    <LazyMotion features={domMax}>
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
        className="flex h-full w-full flex-col  items-center justify-center"
      >
        {/* Tab.Group -> vertical:矢印で移動する際に縦にする defaultIndex:初期値 */}
        <div className="flex flex-col items-center justify-center space-y-4 rounded-md border bg-indigo-500 p-4">
          <Tab.Group
            defaultIndex={1}
            onChange={(index) => {
              setSelectedIndex(index);
              console.log("Changed selected tab to:", index);
            }}
          >
            <Tab.List className="relative flex space-x-1 rounded-md border bg-blue-900/20 bg-blue-300">
              <Tab
                as="div"
                className=" relative flex items-center justify-center px-4 py-2"
              >
                {({ selected }) => (
                  <>
                    <span className="relative z-10">Tab1</span>
                    {selected ? (
                      <m.div
                        layout
                        layoutId="bg"
                        className=" absolute z-0 h-full w-full bg-white"
                      />
                    ) : null}
                  </>
                )}
              </Tab>
              <Tab
                as="div"
                className=" relative flex items-center justify-center px-4 py-2"
              >
                {({ selected }) => (
                  <>
                    <span className="relative z-10">Tab2</span>
                    {selected ? (
                      <m.div
                        layout
                        layoutId="bg"
                        className=" absolute z-0 h-full w-full bg-white"
                      />
                    ) : null}
                  </>
                )}
              </Tab>
              <Tab
                as="div"
                className=" relative flex items-center justify-center px-4 py-2"
              >
                {({ selected }) => (
                  <>
                    <span className="relative z-10">Tab3</span>
                    {selected ? (
                      <m.div
                        layout
                        layoutId="bg"
                        className=" absolute z-0 h-full w-full bg-white"
                      />
                    ) : null}
                  </>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className="flex w-full flex-col items-center justify-center bg-white">
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Transition>
    </LazyMotion>
  );
};

export default TabsMain;
