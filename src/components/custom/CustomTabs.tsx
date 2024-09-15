import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabListType } from "@/types/types.component";

interface CustomTabsProps {
  tabList: TabListType[];
}

const CustomTabs = ({ tabList }: CustomTabsProps) => {
  // --------------------------------------------
  // Default value
  // --------------------------------------------
  const defaultValue = tabList[0].label.toLowerCase();

  return (
    <Tabs defaultValue={defaultValue} className="w-full space-y-5">
      <TabsList className="">
        {tabList.map(({ label }) => {
          const lowerCaseLabel = label.toLowerCase();
          return (
            <TabsTrigger key={lowerCaseLabel} value={lowerCaseLabel}>
              {label}
            </TabsTrigger>
          );
        })}
      </TabsList>

      {tabList.map(({ label, component }) => {
        const lowerCaseLabel = label.toLowerCase();
        return (
          <TabsContent key={lowerCaseLabel} value={lowerCaseLabel}>
            {component}
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export default CustomTabs;
