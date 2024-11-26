'use client';

import { useEffect, useRef, useState } from 'react';
import outsideClick from '@/utils/outsideClick';

type CustomSelectProps = {
  classNameSelected?: string;
  classNameWrapper?: string;
  classNameList?: string;
  classNameListItem?: string;
  listData: string[];
};

type ListItemData = string | number;
type ListItem = {
  id: number | string;
  data: ListItemData;
};

export default function CustomSelect({
  classNameList,
  classNameListItem,
  classNameSelected,
  classNameWrapper,
  listData,
}: CustomSelectProps) {
  const OPEN_CLASS_NAME = 'open';
  const refSelect = useRef<HTMLDivElement>(null);
  let initClickOutside = useRef<Function>(() => {});
  let removeClickOutside = useRef<Function>(() => {});
  const [dataList, setDataList] = useState<ListItem[]>([]);
  const [selectedData, setSelectedData] = useState<ListItemData>('');
  const prevSelectedData = useRef<ListItem | null>(null);

  useEffect(() => {
    if (refSelect.current) {
      const { init: initOutsideClickSelect, remove: removeOutsideClickSelect } =
        outsideClick(refSelect.current, OPEN_CLASS_NAME);

      initClickOutside.current = initOutsideClickSelect;
      removeClickOutside.current = removeOutsideClickSelect;
    }

    if (listData.length > 0) {
      setDataList(() =>
        listData.map(
          (data: string, index: number) => ({ id: index++, data } as ListItem)
        )
      );

      setSelectedData(() => listData[0]);
    }
  }, [listData]);

  useEffect(() => {
    if (!dataList.length) return;
    const theSelectedItemIndex = dataList.findIndex((dataItem) => {
      return dataItem.data === selectedData;
    });
    if (theSelectedItemIndex < 0) return;
    const theSelectedItem = dataList[theSelectedItemIndex];

    setDataList(() => {
      const theDataList = dataList.slice();

      if (
        prevSelectedData.current &&
        prevSelectedData.current.id !== theSelectedItem.id
      ) {
        theDataList.push(prevSelectedData.current);
      }

      theDataList.splice(theSelectedItemIndex, 1);
      return theDataList;
    });

    setTimeout(() => {
      prevSelectedData.current = theSelectedItem;
    }, 0);
  }, [selectedData]);

  const handleToggle = () => {
    removeClickOutside.current && removeClickOutside.current();

    if (refSelect.current) {
      refSelect.current.classList.toggle(OPEN_CLASS_NAME);

      if (refSelect.current.classList.contains(OPEN_CLASS_NAME)) {
        initClickOutside.current();
      }
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      removeClickOutside.current && removeClickOutside.current();

      if (refSelect.current) {
        refSelect.current.classList.toggle(OPEN_CLASS_NAME);

        if (refSelect.current.classList.contains(OPEN_CLASS_NAME)) {
          initClickOutside.current();
        }
      }
    }
  };

  const handleSelect = (data: any) => {
    setSelectedData(data);

    if (refSelect.current) refSelect.current.classList.toggle(OPEN_CLASS_NAME);
  };

  const handleKeyUpItem = (
    data: any,
    event: React.KeyboardEvent<HTMLLIElement>
  ) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      setSelectedData(data);
      if (refSelect.current)
        refSelect.current.classList.toggle(OPEN_CLASS_NAME);
    }
  };

  return (
    <div
      ref={refSelect}
      className={`custom-select${
        classNameWrapper ? ` ${classNameWrapper}` : ''
      }`}
    >
      <div
        className={`custom-select__selected${
          classNameSelected ? ` ${classNameSelected}` : ''
        }`}
        tabIndex={0}
        role="button"
        onClick={handleToggle}
        onKeyUp={handleKeyUp}
      >
        {selectedData}
      </div>

      <ul
        className={`custom-select__list${
          classNameList ? ` ${classNameList}` : ''
        }`}
        data-lenis-prevent
      >
        {dataList.map((item: ListItem) => (
          <li
            key={item.id}
            className={`custom-select__item${
              classNameListItem ? ` ${classNameListItem}` : ''
            }`}
            tabIndex={0}
            role="button"
            onClick={() => handleSelect(item.data)}
            onKeyUp={(event) => handleKeyUpItem(item.data, event)}
          >
            {item.data}
          </li>
        ))}
      </ul>
    </div>
  );
}
