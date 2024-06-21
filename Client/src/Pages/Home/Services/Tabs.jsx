import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import Card from "./Card";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";

export function TabsDefault() {
  const axiosCommon = useAxiosCommon();

  // Define a function to fetch data using axiosCommon
  const fetchData = async () => {
    const response = await axiosCommon.get('/services'); // Adjust the endpoint as per your API
    return response.data;
  };

  // Use useQuery from @tanstack/react-query to fetch and manage data
  const { data, isLoading, error } = useQuery({
    queryKey: 'services',
    queryFn: fetchData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data[0]._id)

  return (
    <Tabs value="Cavity Protection" className="">
      <TabsHeader className="p-4 bg-[#7ddfd7] ">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="font-bold bg-[#aadbe8]">
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, image , desc , _id}) => (
          <TabPanel key={value} value={value}>
            <Card data={value} id={_id} image={image} desc={desc} className="w-full p-4"></Card>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
