import { Button } from "@mui/material";
import { styled } from "styled-components";

export const StyledButton = styled(Button)`
  background-color: ${(props) => props.bgc};
  font-weight: 500;
  border-radius: 5px;
  text-transform: capitalize;
  text-align: center;
  cursor: pointer;
  color: #fff !important;
  outline: none;
  transition: all 400ms linear 0s;
  border: none;
  padding: 0px 30px !important;
  line-height: 48px !important;
  margin-left: ${(props) => props.ml};
  margin-bottom: ${(props) => props.mb};
  @media screen and (max-width: 600px) {
    margin-left: ${(props) => props.mlSmall};
    margin-bottom: ${(props) => props.mbSmall};
  }
`;
