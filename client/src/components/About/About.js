import React, { useState } from "react";
import Row from "../Globals/Row";
import Title from "../Globals/Title";
import { PrimaryBtn } from "../Globals/Button";
import aboutImg from "../../images/aboutBcg.jpeg";
import styled from "styled-components";
import Item from "../Globals/Item";
import { SlantedSection, Section } from "../Globals/Section";
import Card from "../Globals/Card";
import img1 from "../../images/homeBcg.jpeg";
import FormInput from "../Globals/Form/FormInput";
import {
  TwoInputContainer,
  GroupContainer,
} from "../Globals/Form/FormInputContainer";
import Form from "../Globals/Form/Form";
import Modal from "../Globals/Modal";
import ToggleButton from "../Globals/ToggleButton";
import RadioButton from "../Globals/RadioButton";
import CheckButton from "../Globals/CheckButton";
import Typer from "../Globals/Typer";

const About = ({ className }) => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const months = ["Jan", "Feb", "March", "April", "May"];
  let msgs = [
    "WELCOME TO MY WORLD",
    "THIS IS MY WEBSITE",
    "I AM AT YOUR SERVICE",
  ];
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const onChange = () => {};

  const toggleModal = () => {
    setIsOpen(true);
  };

  return (
    <div className={className}>
      <Section>
        <Row>
          <Item className="about-img" size={"50%"}>
            <img src={aboutImg} alt="about us" style={{ width: "100%" }} />
          </Item>
          <Item className="about-info" size={"50%"}>
            <Title title="about us" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              aut quos ea optio ipsa, molestiae officiis, voluptates itaque
              blanditiis nostrum est fugiat, architecto odit at atque obcaecati
              nihil! Cupiditate, error.
            </p>
            <PrimaryBtn>read more</PrimaryBtn>
          </Item>
        </Row>
      </Section>
      <SlantedSection color="lightgrey">
        <Row>
          <Item className="about-img" size={"50%"}>
            <img src={aboutImg} alt="about us" style={{ width: "100%" }} />
          </Item>
          <Item className="about-info" size={"50%"}>
            <Title title="about us" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              aut quos ea optio ipsa, molestiae officiis, voluptates itaque
              blanditiis nostrum est fugiat, architecto odit at atque obcaecati
              nihil! Cupiditate, error.
            </p>
            <PrimaryBtn>read more</PrimaryBtn>
          </Item>
        </Row>
      </SlantedSection>
      <Section>
        <Row>
          <Item className="about-img" size={"50%"}>
            <img src={aboutImg} alt="about us" style={{ width: "100%" }} />
          </Item>
          <Item className="about-info" size={"50%"}>
            <Title title="about us" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              aut quos ea optio ipsa, molestiae officiis, voluptates itaque
              blanditiis nostrum est fugiat, architecto odit at atque obcaecati
              nihil! Cupiditate, error.
            </p>
            <PrimaryBtn circle>read more</PrimaryBtn>
          </Item>
        </Row>
      </Section>
      <SlantedSection color="lightgrey">
        <Row>
          <Item className="about-img" size={"50%"}>
            <img src={aboutImg} alt="about us" style={{ width: "100%" }} />
          </Item>
          <Item className="about-info" size={"50%"}>
            <Title title="about us" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              aut quos ea optio ipsa, molestiae officiis, voluptates itaque
              blanditiis nostrum est fugiat, architecto odit at atque obcaecati
              nihil! Cupiditate, error.
            </p>
            <PrimaryBtn>read more</PrimaryBtn>
          </Item>
        </Row>
      </SlantedSection>
      <Section>
        <Row>
          <Item size={"25%"}>
            <Card />
          </Item>
          <Item size={"25%"}>
            <Card img={img1} />
          </Item>
          <Item size={"25%"}>
            <Card />
          </Item>
          <Item size={"25%"}>
            <Card img={img1} />
          </Item>
        </Row>
      </Section>
      <Section>
        <Row>
          <Item>
            <Form size={"100%"}>
              <GroupContainer>
                <FormInput label="Email" value={email} onChange={onChange} />
              </GroupContainer>
              <TwoInputContainer>
                <GroupContainer size="49%">
                  <FormInput label="Email" value={email} onChange={onChange} />
                </GroupContainer>
                <GroupContainer size="49%">
                  <FormInput label="Email" value={email} onChange={onChange} />
                </GroupContainer>
              </TwoInputContainer>
            </Form>
          </Item>
        </Row>
        <Row>
          <Item size="50%">
            <Form size={"100%"}>
              <GroupContainer>
                <FormInput value={email} onChange={onChange} />
              </GroupContainer>
              <TwoInputContainer>
                <GroupContainer size="49%">
                  <FormInput label="Email" value={email} onChange={onChange} />
                </GroupContainer>
                <GroupContainer size="49%">
                  <FormInput label="Email" value={email} onChange={onChange} />
                </GroupContainer>
              </TwoInputContainer>
            </Form>
          </Item>
          <Item className="about-img" size={"50%"}>
            <img src={aboutImg} alt="about us" style={{ width: "100%" }} />
          </Item>
        </Row>
      </Section>
      <Section>
        <Row>
          <Item>
            <Modal>
              <Item size="50%">
                <Form size={"100%"}>
                  <GroupContainer>
                    <FormInput value={email} onChange={onChange} />
                  </GroupContainer>
                  <TwoInputContainer>
                    <GroupContainer size="49%">
                      <FormInput
                        label="Email"
                        value={email}
                        onChange={onChange}
                      />
                    </GroupContainer>
                    <GroupContainer size="49%">
                      <FormInput
                        label="Email"
                        value={email}
                        onChange={onChange}
                      />
                    </GroupContainer>
                  </TwoInputContainer>
                </Form>
              </Item>
              <Item className="about-img" size={"50%"}>
                <img src={aboutImg} alt="about us" style={{ width: "100%" }} />
              </Item>
            </Modal>
            <Modal>
              <Item size={"100%"}>
                <img
                  src={aboutImg}
                  alt="about us"
                  style={{ width: "100%", height: "100%" }}
                />
              </Item>
            </Modal>
            <Modal>
              <Item>
                <Form size={"100%"}>
                  <GroupContainer>
                    <FormInput value={email} onChange={onChange} />
                  </GroupContainer>
                  <TwoInputContainer>
                    <GroupContainer size="49%">
                      <FormInput
                        label="Email"
                        value={email}
                        onChange={onChange}
                      />
                    </GroupContainer>
                    <GroupContainer size="49%">
                      <FormInput
                        label="Email"
                        value={email}
                        onChange={onChange}
                      />
                    </GroupContainer>
                  </TwoInputContainer>
                </Form>
              </Item>
            </Modal>
          </Item>
        </Row>
      </Section>
      <Section>
        <Row>
          <Item size={"25%"}>
            <Card down />
          </Item>
          <Item size={"25%"}>
            <Card up />
          </Item>
          <Item size={"25%"}>
            <Card left />
          </Item>
          <Item size={"25%"}>
            <Card right />
          </Item>
          <Item size={"25%"}>
            <Card fadeIn />
          </Item>
        </Row>
      </Section>
      <Section>
        <Row>
          <Item size={"50%"}>
            <ToggleButton />
            <RadioButton />
            <CheckButton />
          </Item>
          <Item>
            <div className="myCheckbox-wrapper">
              {months.map((item, i) => (
                <CheckButton item={item} key={i} />
              ))}
            </div>
          </Item>
        </Row>
      </Section>
      <Section>
        <Row>
          <Item>
            <div className="typing">
              <Typer heading={"Things I want to type:"} messages={msgs} />
            </div>
          </Item>
        </Row>
      </Section>
    </div>
  );
};

export default styled(About)`
  p {
    color: black;
  }

  .about-img {
    background: transparent;
  }
`;
