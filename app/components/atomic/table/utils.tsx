import { Text } from "../texts";
const NoDataComponent = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center items-center w-full h-14">
      <Text variant="title-03" italic>
        text
      </Text>
    </div>
  );
};

export { NoDataComponent };
