import { useState } from "react";
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicatorWrapper, ActionsheetDragIndicator, ActionsheetItem, ActionsheetItemText } from "@gluestack-ui/themed";
import { Icon, CheckIcon } from "@gluestack-ui/themed";

const menuBottom = ({ handleClose, showActionsheet, filters, onSelectFilter, selectedFilter }) => {
  const handleClosing = (filter) => {
    handleClose();
    onSelectFilter(filter);
  };

  return (
    <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
      <ActionsheetBackdrop />
      <ActionsheetContent>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        {filters.map((filter, index) => (
          <ActionsheetItem
            key={index}
            onPress={() => handleClosing(filter)}
            style={{
              backgroundColor: filter === selectedFilter ? "#00ced1" : "transparent",
            }}>
            <ActionsheetItemText
              style={{
                color: filter === selectedFilter ? "#fff" : "#000",
              }}>
              {filter}
            </ActionsheetItemText>
            {filter === selectedFilter && <Icon color={"#fff"} as={CheckIcon} />}
          </ActionsheetItem>
        ))}
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default menuBottom;
