import LineH from "@components/line/LineH";
import { BaseModal } from "@components/modals/BaseModal";
import { Label } from "@components/text/Label";
import { Title } from "@components/text/Title";
import { SearchInputLayout } from "@controller/layout/SearchInputLayout";
import { StockItem } from "@controller/stock/StockItem";
import { colorTexts } from "@styles/app-color";
import { useState } from "react";
import { stocks } from "@assets/data/stock";
import { Stock } from "@type/stock-type";

interface StockSearchModalProps {
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
  onClickItem?: (mItem: Stock) => void
}

export const StockSearchModal = (props: StockSearchModalProps) => {
  const [search, setSearch] = useState("");

  return (
    <BaseModal
      isOpen={props.isOpen}
      setIsOpen={props.setIsOpen}
      width={"80vw"}
      contentStyle={{}}
    >
      <Title
        txt="Search Stock"
        viewStyle={{
          textAlign: "left",
          color: colorTexts.subTitle,
          marginBottom: 20,
        }}
      />
      <SearchInputLayout
        search={search}
        setSearch={setSearch}
        placeholder={"Search Stock"}
      />
      <Label
        label="Recent"
        viewStyle={{
          color: colorTexts.subTitle,
          marginBottom: 12,
          marginTop: 40,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
          height: 400,
        }}
      >
        {
          stocks.map(mItem => {
            if(mItem.symbol.includes(search.toLocaleUpperCase()) || search == "") {
              return <StockItem key={'stock-search-' + mItem.symbol} name={mItem.symbol} des={mItem.other.company} onClick={() => {
                props.onClickItem && props.onClickItem(mItem)
              }} />
            } else {
              return <></>
            }
          })
        }
        <LineH />
      </div>
    </BaseModal>
  );
};
