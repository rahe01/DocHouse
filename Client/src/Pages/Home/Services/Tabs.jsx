import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
   
    
  } from "@material-tailwind/react";
  
  import data from "../../../../public/services.json";
  import Card from './Card';

  export function TabsDefault() {
    // const data = [
    //   {
    //     label: "Cavity Protection",
    //     value: "Cavity Protection",
    //     desc: `It really matters and then like it really doesn't matter.
    //     What matters is the people who are sparked by it. And the people 
    //     who are like offended by it, it doesn't matter.`,
    //   },
    //   {
    //     label: "Cosmetic Dentisty",
    //     value: "Cosmetic Dentisty",
    //     desc: `Because it's about motivating the doers. Because I'm here
    //     to follow my dreams and inspire other people to follow their dreams, too.`,
    //   },
    //   {
    //     label: "Oral Surgery",
    //     value: "Oral Surgery",
    //     desc: `We're not always in the position that we want to be at.
    //     We're constantly growing. We're constantly making mistakes. We're
    //     constantly trying to express ourselves and actualize our dreams.`,
    //   },
    //   {
    //     label: "Angular",
    //     value: "angular",
    //     desc: `Because it's about motivating the doers. Because I'm here
    //     to follow my dreams and inspire other people to follow their dreams, too.`,
    //   },
    //   {
    //     label: "Svelte",
    //     value: "svelte",
    //     desc: `We're not always in the position that we want to be at.
    //     We're constantly growing. We're constantly making mistakes. We're
    //     constantly trying to express ourselves and actualize our dreams.`,
    //   },
    // ];
  
    return (
      <Tabs value="Cavity Protection" className="">
        <TabsHeader className="p-4">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} className="font-bold">
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              <Card desc={desc} className="w-full p-4">
                
              </Card>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }
  