import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import campus from '../assets/campus.jpg';
import MyMap from './MyMap';

function MyTabs() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>About us</Tab>
          <Tab>Map</Tab>
          <Tab>Map</Tab>
        </TabList>

        <TabPanel>
          <h2>WBS Coding School Campus</h2>
          <img src={campus} alt='' width='100%' />
          <p>
            <em>See you soon! 🌞</em>
          </p>
        </TabPanel>

        <TabPanel>
          <MyMap lat={52.45720620875984} lng={13.540108948918792} />
        </TabPanel>
        <TabPanel>
          <h2>WBS Coding School Campus</h2>
          <img src={campus} alt='' width='100%' />
          <p>
            <em>See you soon! 🌞</em>
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default MyTabs;
