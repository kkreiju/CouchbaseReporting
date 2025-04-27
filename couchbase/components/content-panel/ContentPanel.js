import React, { useState } from "react";
import Gradient from "./gradient/Gradient";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Modal from "../Modal";
import { EditUserForm } from "../forms/EditUserForm";
import ContentLoader from "../loaders/ContentLoader";
import Avatar from "./avatar/Avatar";
import { validateEmail } from "../../util/helpers/validateEmail";

export const ContentPanel = ({
  profile,
  handleProfileEdit,
  handleProfileDeletion,
  setUpdatedFirstName,
  setUpdatedLastName,
  setUpdatedEmail,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditModalConfirmable, setIsEditModalConfirmable] = useState(false);

  const handleEdit = () => {
    handleProfileEdit(profile.pid);
  };

  const handleDelete = () => {
    handleProfileDeletion(profile.pid);
  };

  const handleSetUpdatedFirstName = (fName) => {
    setUpdatedFirstName(fName);
    if (fName.length === 0) {
      setIsEditModalConfirmable(false);
      return;
    }
    setIsEditModalConfirmable(true);
  };

  const handleSetUpdatedLastName = (lName) => {
    setUpdatedLastName(lName);
    if (lName.length === 0) {
      setIsEditModalConfirmable(false);
      return;
    }
    setIsEditModalConfirmable(true);
  };

  const handleSetUpdatedEmail = (eAddress) => {
    setUpdatedEmail(eAddress);
    if (eAddress.length === 0 || !validateEmail(eAddress)) {
      setIsEditModalConfirmable(false);
      return;
    }
    setIsEditModalConfirmable(true);
  };

  return (
    <div className="w-full h-full bg-[#05061B] flex flex-col overflow-hidden">
      <Modal
        title="Are you sure?"
        subheading="This operation cannot be reversed."
        bodyNode={
          <div className="mt-4">
            The profile for {profile?.firstName} {profile?.lastName} will be
            permanently deleted.
          </div>
        }
        open={isDeleteModalOpen}
        setOpen={setIsDeleteModalOpen}
        onConfirm={handleDelete}
        isConfirmValid={true}
        accentColor={"red"}
        icon={"trash"}
      />
      <Modal
        title="Edit User Profile"
        subheading="Update details for this user."
        bodyNode={
          <EditUserForm
            firstName={profile?.firstName}
            setFirstName={handleSetUpdatedFirstName}
            lastName={profile?.lastName}
            setLastName={handleSetUpdatedLastName}
            email={profile?.email}
            setEmail={handleSetUpdatedEmail}
          />
        }
        open={isEditModalOpen}
        setOpen={setIsEditModalOpen}
        onConfirm={handleEdit}
        isConfirmValid={isEditModalConfirmable}
        accentColor={"green"}
        icon={"pencil"}
      />
      {profile === undefined ? (
        <ContentLoader />
      ) : (
        <>
          <div className="flex-shrink-0 h-48 sm:h-56 md:h-64 lg:h-72 relative border-b border-gray-800 shadow-sm">
            <Gradient
              firstName={profile.firstName}
              lastName={profile.lastName}
            />
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#05061B]/40 to-transparent"></div>

            <div className="absolute bottom-0 transform translate-y-1/2 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0">
              <Avatar name={`${profile.firstName} ${profile.lastName}`} />
            </div>

            <div className="absolute bottom-4 right-4 flex gap-3">
              <button
                onClick={() => setIsEditModalOpen(true)}
                className="transition-transform hover:scale-105"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-900 hover:bg-emerald-800 text-emerald-300 shadow-md">
                  <PencilIcon className="h-6 w-6" />
                </div>
              </button>
              <button
                onClick={() => setIsDeleteModalOpen(true)}
                className="transition-transform hover:scale-105"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-900 hover:bg-rose-800 text-rose-300 shadow-md">
                  <TrashIcon className="h-6 w-6" />
                </div>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-8 pt-16 md:pt-20 lg:pt-16 md:pl-24">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mt-5 md:text-left mb-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-100 font-light">
                  {profile.firstName} {profile.lastName}
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mt-2">
                  {profile.email}
                </p>
                <div className="mt-4">
                  <code className="bg-[#0F1128] text-gray-300 px-3 py-1 rounded-md text-sm inline-block">
                    {profile.pid}
                  </code>
                </div>
              </div>

              <div className="bg-[#0A0C22] rounded-xl shadow-md border border-gray-800 p-6">
                <h3 className="text-lg font-medium text-gray-200 mb-4">
                  Profile Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-400">Full Name</p>
                    <p className="text-base text-gray-200">
                      {profile.firstName} {profile.lastName}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-400">Email Address</p>
                    <p className="text-base text-gray-200">{profile.email}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-400">Profile ID</p>
                    <p className="text-base text-gray-200 break-all">
                      {profile.pid}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
