import { BaseModal } from "@components/modals/BaseModal";
import { Title } from "@components/text/Title";
import { colorTexts } from "@styles/app-color";
import IconArrow from "@assets-images/icon-arrow.svg?react";
import { AppIcon } from "@components/image/AppIcon";
import { Label } from "@components/text/Label";
import LineH from "@components/line/LineH";
import { OrderStockItem } from "@controller/stock/OrderStockItem";
import { exchangeBySymbol } from "@assets/data/stock";
import { useEffect, useState } from "react";
import {
  fetchGet,
  fetchPost,
} from "@modules/api/network-service-function-model";
import { ApiEndPoint } from "@modules/api/api-end-point.enum";
import { useBasicDataHook } from "@hook/context-providers/basic-data-hook";
import { useAppDialogHook } from "@hook/context-providers/app-dialog-hook";
import { OrderType } from "@type/order-type";
import { PageLoading } from "@components/loadings/PageLoading";
import { LoadingModal } from "./LoadingModal";
import { SubTitle } from "@components/text/SubTitle";

interface OrderListModalProps {
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
}

export const OrderListModal = (props: OrderListModalProps) => {
  const [showLoading, setShowLoading] = useState(false);
  const [showDataLoading, setShowDataLoading] = useState(false);

  const { authData } = useBasicDataHook();
  const { showAppErrorDialog, showAppDialog } = useAppDialogHook();

  const [list, setList] = useState<OrderType[]>([]);

  useEffect(() => {
    if (props.isOpen) {
      callApiGetOrder();
    }
  }, [props.isOpen]);

  const onClickClose = () => {
    props.setIsOpen(false);
  };

  const callApiGetOrder = () => {
    setShowDataLoading(true);
    fetchGet(ApiEndPoint.ORDER, {
      headers: {
        xUid: authData?.xUid ?? "",
        accessToken: authData?.accesstoken ?? "",
      },
    })
      .then((r) => {
        setShowDataLoading(false);
        setList(r.data);
      })
      .catch((e) => {
        setShowDataLoading(false);
        showAppErrorDialog(e);
      });
  };

  const onClickCancelOrder = (data: OrderType) => {
    fetchPost(
      ApiEndPoint.ORDER_CANCEL.replace("{order_id}", data.OID),
      {},
      {
        headers: {
          xUid: authData?.xUid ?? "",
          accessToken: authData?.accesstoken ?? "",
        },
      }
    )
      .then((r) => {
        setShowLoading(false);
        setTimeout(() => {
          showAppDialog(undefined, "Cancel Order Success", () => {
            callApiGetOrder();
          });
        }, 500);
      })
      .catch((e) => {
        setShowLoading(false);
        showAppErrorDialog(e);
      });
  };

  return (
    <BaseModal
      isOpen={props.isOpen}
      setIsOpen={props.setIsOpen}
      width={"80vw"}
      contentStyle={{}}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          marginBottom: 20,
          cursor: "pointer",
        }}
        onClick={onClickClose}
      >
        <AppIcon size={24}>
          <IconArrow />
        </AppIcon>
        <Title
          txt="Order List"
          viewStyle={{
            textAlign: "left",
            color: colorTexts.subTitle,
          }}
        />
      </div>
      {showDataLoading ? (
        <PageLoading />
      ) : (
        <>
          {list.filter((v) => v.Status == "Pending").length == 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 200,
              }}
            >
              <SubTitle
                txt={"No Order Record!"}
                viewStyle={{ textAlign: "center" }}
              />
            </div>
          ) : (
            <Label
              label="Pending"
              viewStyle={{ marginTop: 40, marginBottom: 12 }}
            />
          )}
          {list
            .filter((v) => v.Status == "Pending")
            .map((item) => {
              return (
                <>
                  <OrderStockItem
                    key={"order-list-" + item.UID}
                    stockItemProps={{
                      name: exchangeBySymbol(item.Symbol).symbol,
                      des: exchangeBySymbol(item.Symbol).other.company,
                    }}
                    data={item}
                    onClick={onClickCancelOrder}
                  />
                  <LineH />
                </>
              );
            })}
        </>
      )}
      <LoadingModal isOpen={showLoading} setIsOpen={setShowLoading} />
    </BaseModal>
  );
};
