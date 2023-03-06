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
      subTitle: 'Presenting',
      text: 'I enjoy presenting information to people.',
    },
    {
      img: Webshop,
      eventkey: 'profile',
      title: 'Communication',
      subTitle: 'Journalistic Writing',
      text: "During my bachelor's programme Transcultural Communication creating different text types - mainly journalistic - in three different languages was the main agenda. We have acquired a high level of language and text competence as well as related cultural studies.",
    },
    {
      img: Webshop,
      eventkey: 'longer-tab',
      title: 'Mediation',
      subTitle: '(International) Conflict Resolution',
      text: "During my masters' programme International Development I developed a firm interest in international peace-keeping. The aim is to remove tensions between parties or states maintaining a consistent level of peaceful and respectful communication in the pursuit of each party's goals.",
    },
    {
      img: Webshop,
      eventkey: 'contact',
      title: 'Web Development & Design',
      subTitle: '',
      text: 'I also enjoy creating and designing websites - check out my live projects and designs section.',
    },
  ];
  return (
    <section id="about">
      <h1 className="aboutHeader">About Me</h1>
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
      </Tabs>{' '}
    </section>
  );
};
