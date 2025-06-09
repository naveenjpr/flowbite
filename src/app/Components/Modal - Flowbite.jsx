"use client";
import { useRef, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Label,
  TextInput,
  Checkbox,
  Select,
} from "flowbite-react";

import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function Modal_Flowbite() {
  return (
    <>
      <h1 className="text-center font-bold text-blue-600 text-[25px] underline decoration-dotted mb-[20px]">
        Modal_Flowbite{" "}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 text-start ">
        <Default_modal />
        <Backdrop_dismissible />
        <Pop_up_modal />
        <Modal_with_form_elements />
        <Initial_focus />
        <Sizing_options />
        <Placement_options />
      </div>
    </>
  );
}
function Default_modal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div>
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Default_modal
        </h2>
        <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <ModalHeader>Terms of Service</ModalHeader>
          <ModalBody>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpenModal(false)}>I accept</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
function Backdrop_dismissible() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div>
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Backdrop_dismissible
        </h2>
        <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
          <ModalHeader>Terms of Service</ModalHeader>
          <ModalBody>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpenModal(false)}>I accept</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
function Pop_up_modal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div>
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Pop_up_modal
        </h2>
        <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
        <Modal
          show={openModal}
          size="md"
          onClose={() => setOpenModal(false)}
          popup
        >
          <ModalHeader />
          <ModalBody>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="failure" onClick={() => setOpenModal(false)}>
                  {"Yes, I'm sure"}
                </Button>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  No, cancel
                </Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}
function Modal_with_form_elements() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }
  return (
    <>
      <div>
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Modal_with_form_elements{" "}
        </h2>

        <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
          <ModalHeader />
          <ModalBody>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email">Your email</Label>
                </div>
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password">Your password</Label>
                </div>
                <TextInput id="password" type="password" required />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <a
                  href="#"
                  className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
                >
                  Lost Password?
                </a>
              </div>
              <div className="w-full">
                <Button>Log in to your account</Button>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?&nbsp;
                <a
                  href="#"
                  className="text-cyan-700 hover:underline dark:text-cyan-500"
                >
                  Create account
                </a>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}
function Initial_focus() {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef(null);

  return (
    <>
      <div>
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Modal_with_form_elements{" "}
        </h2>

        <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
        <Modal
          show={openModal}
          size="md"
          popup
          onClose={() => setOpenModal(false)}
          initialFocus={emailInputRef}
        >
          <ModalHeader />
          <ModalBody>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email">Your email</Label>
                </div>
                <TextInput
                  id="email"
                  ref={emailInputRef}
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password">Your password</Label>
                </div>
                <TextInput id="password" type="password" required />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <a
                  href="#"
                  className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
                >
                  Lost Password?
                </a>
              </div>
              <div className="w-full">
                <Button>Log in to your account</Button>
              </div>
              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?&nbsp;
                <a
                  href="#"
                  className="text-cyan-700 hover:underline dark:text-cyan-500"
                >
                  Create account
                </a>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}
function Sizing_options() {
  const [openModal, setOpenModal] = useState(false);
  const [modalSize, setModalSize] = useState("md"); // ✅ ठीक है

  return (
    <>
      <div>
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Modal_with_form_elements{" "}
        </h2>

        <div className="flex flex-wrap gap-4">
          <div className="w-40">
            <Select
              defaultValue="md"
              onChange={(event) => setModalSize(event.target.value)}
            >
              <option value="sm">sm</option>
              <option value="md">md</option>
              <option value="lg">lg</option>
              <option value="xl">xl</option>
              <option value="2xl">2xl</option>
              <option value="3xl">3xl</option>
              <option value="4xl">4xl</option>
              <option value="5xl">5xl</option>
              <option value="6xl">6xl</option>
              <option value="7xl">7xl</option>
            </Select>
          </div>
          <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
        </div>
        <Modal
          show={openModal}
          size={modalSize}
          onClose={() => setOpenModal(false)}
        >
          <ModalHeader>Small modal</ModalHeader>
          <ModalBody>
            <div className="space-y-6 p-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpenModal(false)}>I accept</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
function Placement_options() {
  const [openModal, setOpenModal] = useState(false);
  const [modalPlacement, setModalPlacement] = useState("center");

  return (
    <>
      <div>
        <h2 className="text-center text-red-600 font-semibold mb-4">
          Placement_options{" "}
        </h2>

        <div className="flex flex-wrap gap-4">
          <div className="w-40">
            <Select
              defaultValue="center"
              onChange={(event) => setModalPlacement(event.target.value)}
            >
              <option value="center">Center</option>
              <option value="top-left">Top left</option>
              <option value="top-center">Top center</option>
              <option value="top-right">Top right</option>
              <option value="center-left">Center left</option>
              <option value="center-right">Center right</option>
              <option value="bottom-right">Bottom right</option>
              <option value="bottom-center">Bottom center</option>
              <option value="bottom-left">Bottom left</option>
            </Select>
          </div>
          <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
        </div>
        <Modal
          show={openModal}
          position={modalPlacement}
          onClose={() => setOpenModal(false)}
        >
          <ModalHeader>Small modal</ModalHeader>
          <ModalBody>
            <div className="space-y-6 p-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpenModal(false)}>I accept</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
