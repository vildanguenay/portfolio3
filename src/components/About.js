import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import Webshop from '.././img/webshop.png';

export const About = () => {
  const itemData = [
    {
      img: Webshop,
      eventkey: 'home',
      title: 'Storytelling',
      text: 'loreeeeeeeeeeeeeeeeeeeem',
    },
    {
      img: Webshop,
      eventkey: 'profile',
      title: 'Communication',
      text: 'loreeeeeeeeeeeeeeeeeeeem',
    },
    {
      img: Webshop,
      eventkey: 'longer-tab',
      title: 'Mediation',
      text: 'loreeeeeeeeeeeeeeeeeeeem',
    },
    {
      img: Webshop,
      eventkey: 'contact',
      title: 'Web Development & Design',
      text: 'loreeeeeeeeeeeeeeeeeeeem',
    },
  ];
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      {itemData.map((item) => (
        <Tab eventKey={item.eventkey} title={item.title}>
          <Card>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Text>{item.text}</Card.Text>
            </Card.Body>
          </Card>
        </Tab>
      ))}
    </Tabs>
  );
};
