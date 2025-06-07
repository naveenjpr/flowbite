"use client";
import { HiMail } from "react-icons/hi";

import React from "react";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  HelperText,
  Textarea,
  Select,
  Radio,
  FileInput,
  ToggleSwitch,
  RangeSlider,
} from "flowbite-react";

import { useState } from "react";
import Link from "next/link";

export default function Forms_flowbites() {
  return (
    <>
      <h1 className="text-center font-bold text-blue-600 text-[25px] underline decoration-dotted mb-[20px]">
        Forms_flowbite{" "}
      </h1>
      <div className="grid grid-cols-1 gap-12 px-4">
        <Default_form />
        <Input_sizing />
        <Disabled_inputs />
        <Inputs_with_shadow />
        <Form_helper_text />
        <Input_groups_with_icon />
        <Form_validation />
        <Input_element_colors />
        <Textarea_element />
        <Select_input />
        <Checkbox_react />
        <Radio_button />
        <File_upload />
        <Toggle_switch />
        <Range_slider />
      </div>
    </>
  );
}
function Default_form() {
  return (
    <>
      <div>
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Default_form{" "}
        </h2>
        <fieldset className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm">
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1">Your email</Label>
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1">Your password</Label>
              </div>
              <TextInput id="password1" type="password" required />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </fieldset>
      </div>
    </>
  );
}
function Input_sizing() {
  return (
    <>
      <div className="">
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Input_sizing{" "}
        </h2>
        <fieldset className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm">
          <div className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small">Small input</Label>
              </div>
              <TextInput id="small" type="text" sizing="sm" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base">Base input</Label>
              </div>
              <TextInput id="base" type="text" sizing="md" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="large">Large input</Label>
              </div>
              <TextInput id="large" type="text" sizing="lg" />
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
}
function Disabled_inputs() {
  return (
    <>
      <div className="">
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Disabled_inputs{" "}
        </h2>
        <fieldset className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm">
          <div className="flex max-w-md flex-col gap-4">
            <Label htmlFor="disabledInput1">API token</Label>
            <TextInput
              type="text"
              id="disabledInput1"
              placeholder="Disabled input"
              disabled
            />
            <Label htmlFor="disabledInput2">Personal access token</Label>
            <TextInput
              type="text"
              id="disabledInput2"
              placeholder="Disabled readonly input"
              disabled
              readOnly
            />
          </div>
        </fieldset>
      </div>
    </>
  );
}
function Inputs_with_shadow() {
  return (
    <>
      <div className="">
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Inputs_with_shadow
        </h2>
        <fieldset className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm">
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2">Your email</Label>
              </div>
              <TextInput
                id="email2"
                type="email"
                placeholder="name@flowbite.com"
                required
                shadow
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password2">Your password</Label>
              </div>
              <TextInput id="password2" type="password" required shadow />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="repeat-password">Repeat password</Label>
              </div>
              <TextInput id="repeat-password" type="password" required shadow />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="agree" />
              <Label htmlFor="agree" className="flex">
                I agree with the&nbsp;
                <Link
                  href="#"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  terms and conditions
                </Link>
              </Label>
            </div>
            <Button type="submit">Register new account</Button>
          </form>
        </fieldset>
      </div>
    </>
  );
}
function Form_helper_text() {
  return (
    <>
      <div className="">
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Form_helper_text{" "}
        </h2>

        <fieldset className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm">
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="email3">Your email</Label>
            </div>
            <TextInput
              id="email3"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
            <HelperText>
              We’ll never share your details. Read our
              <a
                href="#"
                className="ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Privacy Policy
              </a>
              .
            </HelperText>
          </div>
        </fieldset>
      </div>
    </>
  );
}
function Input_groups_with_icon() {
  return (
    <>
      <div className="">
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Input_groups_with_icon
        </h2>
        <fieldset className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm">
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="email4">Your email</Label>
            </div>
            <TextInput
              id="email4"
              type="email"
              icon={HiMail}
              placeholder="name@flowbite.com"
              required
            />
          </div>
        </fieldset>
      </div>
    </>
  );
}
function Form_validation() {
  return (
    <>
      <div className="">
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Form_validation
        </h2>
        <fieldset className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm">
          <div className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username3" color="success">
                  Your name
                </Label>
              </div>
              <TextInput
                id="username"
                placeholder="Bonnie Green"
                required
                color="success"
              />
              <HelperText>
                <span className="font-medium">Alright!</span> Username
                available!
              </HelperText>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username4" color="failure">
                  Your name
                </Label>
              </div>
              <TextInput
                id="username4"
                placeholder="Bonnie Green"
                required
                color="failure"
              />
              <HelperText>
                <span className="font-medium">Oops!</span> Username already
                taken!
              </HelperText>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
}
function Input_element_colors() {
  return (
    <>
      <div className="">
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Input_element_colors
        </h2>
        <fieldset className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm">
          <div className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="input-gray" color="gray">
                  Gray
                </Label>
              </div>
              <TextInput
                id="input-gray"
                placeholder="Input Gray"
                required
                color="gray"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="input-info" color="info">
                  Info
                </Label>
              </div>
              <TextInput
                id="input-info"
                placeholder="Input Info"
                required
                color="info"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="input-success" color="success">
                  Success
                </Label>
              </div>
              <TextInput
                id="input-success"
                placeholder="Input Success"
                required
                color="success"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="input-failure" color="failure">
                  Failure
                </Label>
              </div>
              <TextInput
                id="input-failure"
                placeholder="Input Failure"
                required
                color="failure"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="input-warning" color="warning">
                  Warning
                </Label>
              </div>
              <TextInput
                id="input-warning"
                placeholder="Input Warning"
                required
                color="warning"
              />
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
}
function Textarea_element() {
  return (
    <>
      <div className="">
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Textarea_element
        </h2>
        <fieldset className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm">
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="comment">Your message</Label>
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={4}
            />
          </div>
        </fieldset>
      </div>
    </>
  );
}
function Select_input() {
  return (
    <>
      <div className="">
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Select_input
        </h2>

        <fieldset className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm">
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="countries">Select your country</Label>
            </div>
            <Select id="countries" required>
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Select>
          </div>
        </fieldset>
      </div>
    </>
  );
}
function Checkbox_react() {
  return (
    <>
      <div className="">
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Checkbox_react
        </h2>
        <fieldset className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm">
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="countries">Select your country</Label>
            </div>
            <Select id="countries" required>
              <option>United States</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </Select>
          </div>
        </fieldset>
      </div>
    </>
  );
}

function Radio_button() {
  return (
    <>
      <div className="">
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Radio_button
        </h2>
        <fieldset className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm">
          <div className="flex max-w-md flex-col gap-4">
            <div className="flex items-center gap-2">
              <Radio
                id="united-state"
                name="countries"
                value="USA"
                defaultChecked
              />
              <Label htmlFor="united-state">United States</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="germany" name="countries" value="Germany" />
              <Label htmlFor="germany">Germany</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="spain" name="countries" value="Spain" />
              <Label htmlFor="spain">Spain</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="uk" name="countries" value="United Kingdom" />
              <Label htmlFor="uk">United Kingdom</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="china" name="countries" value="China" disabled />
              <Label htmlFor="china" disabled>
                China (disabled)
              </Label>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
}
function File_upload() {
  return (
    <>
      <div className="">
        <h2 className="text-center text-red-600 font-semibold mb-4">
          File_upload
        </h2>
        <fieldset className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm">
          <div id="fileUpload" className="max-w-md">
            <Label className="mb-2 block" htmlFor="file">
              Upload file
            </Label>
            <FileInput id="file" />
            <HelperText className="mt-1">
              A profile picture is useful to confirm your are logged into your
              account
            </HelperText>
          </div>
        </fieldset>
      </div>
    </>
  );
}
function Toggle_switch() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);
  const [switch3, setSwitch3] = useState(true);
  return (
    <>
      <div className="">
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Toggle_switch
        </h2>
        <fieldset className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm">
          <div className="flex max-w-md flex-col items-start gap-4">
            <ToggleSwitch
              checked={switch1}
              label="Toggle me"
              onChange={setSwitch1}
            />
            <ToggleSwitch
              checked={switch2}
              label="Toggle me (checked)"
              onChange={setSwitch2}
            />
            <ToggleSwitch
              checked={false}
              disabled
              label="Toggle me (disabled)"
              onChange={() => undefined}
            />
            <ToggleSwitch
              checked={true}
              disabled
              label="Toggle me (disabled)"
              onChange={() => undefined}
            />
            <ToggleSwitch checked={switch3} onChange={setSwitch3} />
          </div>
        </fieldset>
      </div>
    </>
  );
}
function Range_slider() {
  return (
    <>
      <div className="">
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Range_slider
        </h2>

        <fieldset className="border border-gray-300 p-4 md:p-6 rounded-lg shadow-sm">
          <div className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-1 block">
                <Label htmlFor="default-range">Default</Label>
              </div>
              <RangeSlider id="default-range" />
            </div>
            <div>
              <div className="mb-1 block">
                <Label htmlFor="disbaled-range">Disabled</Label>
              </div>
              <RangeSlider id="disabled-range" disabled />
            </div>
            <div>
              <div className="mb-1 block">
                <Label htmlFor="sm-range">Small</Label>
              </div>
              <RangeSlider id="sm-range" sizing="sm" />
            </div>
            <div>
              <div className="mb-1 block">
                <Label htmlFor="md-range">Medium</Label>
              </div>
              <RangeSlider id="md-range" sizing="md" />
            </div>
            <div>
              <div className="mb-1 block">
                <Label htmlFor="lg-range">Large</Label>
              </div>
              <RangeSlider id="lg-range" sizing="lg" />
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
}

