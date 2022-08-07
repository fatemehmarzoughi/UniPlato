import * as React from "react";
import renderer from "react-test-renderer";
import Card from "../src/components/card";
import { Post } from "../src/core/types";
import Button from '../src/components/button';

it(`renders Card component correctly with the post's details informations`, () => {
  const item: Post = {
    id: 0,
    title: 'title',
    description: 'description',
    image: 'imageURL'
  }
  const CardSnapShot = renderer.create(<Card item={item} />);
  expect(CardSnapShot).toMatchSnapshot();
  expect(CardSnapShot.root.props.item.id).toBe(0);
  expect(CardSnapShot.root.props.item.title).toBe('title');
  expect(CardSnapShot.root.props.item.description).toBe('description');
  expect(CardSnapShot.root.props.item.image).toBe('imageURL');
});

it(`renders Button component correctly with the props's details informations`, () => {

  const buttonSnapShot = renderer.create(<Button buttonText="buttonText" onPress={() => {}} />);
  expect(buttonSnapShot).toMatchSnapshot();
  expect(buttonSnapShot.root.props.buttonText).toBe('buttonText')

});