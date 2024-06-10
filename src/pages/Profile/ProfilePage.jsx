import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputForm from "../../components/InputForm/InputForm";
import {
  WrapperContentProfile,
  WrapperHeader,
  WrapperInput,
  WrapperLabel,
  WrapperUploadFile,
} from "./style";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";
import * as message from "../../components/Message/Message";
import { updateUser } from "../../redux/slides/userSlide";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { getBase64 } from "../../utils";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const mutation = useMutationHooks((data) => {
    const { id, access_token, ...rests } = data;
    UserService.updateUser(id, rests, access_token);
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading, isSuccess, isError } = mutation;

  useEffect(() => {
    setEmail(user?.email);
    setName(user?.name);
    setPhone(user?.phone);
    setAddress(user?.address);
    setAvatar(user?.avatar);
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      message.success("Cập nhật thông tin người dùng thành công");
      handleGetDetailsUser(user?.id, user?.access_token);
    } else if (isError) {
      message.error("Cập nhật thông tin người dùng thất bại");
    }
  }, [isSuccess, isError]);

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangeName = (value) => {
    setName(value);
  };
  const handleOnchangePhone = (value) => {
    setPhone(value);
  };
  const handleOnchangeAddress = (value) => {
    setAddress(value);
  };

  const handleOnchangeAvatar = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setAvatar(file.preview);
  };

  const handleUpdate = () => {
    mutation.mutate({
      id: user?.id,
      email,
      name,
      phone,
      address,
      avatar,
      access_token: user?.access_token,
    });
  };
  return (
    <div style={{ width: "100%", margin: "0 auto", height: "500px" }}>
      <WrapperHeader>Thông tin người dùng</WrapperHeader>
      <Loading isLoading={isLoading}>
        <WrapperContentProfile>
          <WrapperInput>
            <WrapperLabel htmlFor="name" style={{ width: "125px" }}>
              Tên người dùng
            </WrapperLabel>
            <InputForm
              style={{ width: "300px" }}
              id="name"
              value={name}
              onChange={handleOnchangeName}
            />
          </WrapperInput>
          <WrapperInput>
            <WrapperLabel htmlFor="email" style={{ width: "125px" }}>
              Email
            </WrapperLabel>
            <InputForm
              style={{ width: "300px" }}
              id="email"
              value={email}
              onChange={handleOnchangeEmail}
            />
          </WrapperInput>
          <WrapperInput>
            <WrapperLabel htmlFor="phone" style={{ width: "125px" }}>
              Số điện thoại
            </WrapperLabel>
            <InputForm
              style={{ width: "300px" }}
              id="email"
              value={phone}
              onChange={handleOnchangePhone}
            />
          </WrapperInput>
          <WrapperInput>
            <WrapperLabel htmlFor="avatar" style={{ width: "125px" }}>
              Ảnh đại diện
            </WrapperLabel>
            <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
              <Button icon={<UploadOutlined />}>Chọn file</Button>
            </WrapperUploadFile>
            {avatar && (
              <img
                src={avatar}
                style={{
                  height: "60px",
                  width: "60px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                alt="avatar"
              />
            )}
            {/* <InputForm style={{ width: '300px' }} id="avatar" value={avatar} onChange={handleOnchangeAvatar} /> */}
          </WrapperInput>
          <WrapperInput>
            <WrapperLabel htmlFor="address" style={{ width: "125px" }}>
              Địa chỉ
            </WrapperLabel>
            <InputForm
              style={{ width: "300px" }}
              id="address"
              value={address}
              onChange={handleOnchangeAddress}
            />
          </WrapperInput>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {" "}
            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleButton={{
                height: "36px",
                width: "fit-content",
                borderRadius: "4px",
                padding: "6px 15px 10px",
              }}
              textbutton={"Cập nhật"}
              styleTextButton={{
                color: "rgb(26, 148, 255)",
                fontSize: "15px",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            ></ButtonComponent>
            <ButtonComponent
              onClick={() => navigate("/")}
              size={40}
              styleButton={{
                height: "36px",
                width: "fit-content",
                borderRadius: "4px",
                padding: "6px 15px 10px",
                background: "#ccc",
              }}
              textbutton={"Quay lại"}
              styleTextButton={{
                // color: "rgb(26, 148, 255)",
                fontSize: "15px",
                fontWeight: "700",
                // textTransform: "uppercase",
              }}
            ></ButtonComponent>
          </div>
        </WrapperContentProfile>
      </Loading>
    </div>
  );
};

export default ProfilePage;
