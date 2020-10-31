/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {parse} from "querystring";
import {BeatLoader} from "react-spinners";
import actions from "../../store/actions";
import {isAuthenticatedSelector, operationSelector} from "redux-data-connect";
import {Analytics} from 'rc-analytics';

interface OAuthCompleteProps {
  method: "signup" | "login";
}

export const GoogleAuthDoneScreen: React.FC<OAuthCompleteProps> = ({
  method,
}: OAuthCompleteProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [hash, setHash] = useState("0");

  // If signedIn, redirect to core
  const isSignedIn = useSelector(isAuthenticatedSelector);

  useEffect(() => {
    const queryString = window.location.search;
    const query = queryString[0] === "?" ? queryString.substr(1) : queryString;
    const values = parse(query) as { code: string };
    const newHash = Date.now().toString();
    setHash(newHash);
    // dispatch(actions.auth.logout());
    dispatch(actions.auth.loginByGoogle(values.code, newHash));
  }, []);

  const operation = useSelector(operationSelector(hash));

  console.log(operation, hash);
  // TODO: Move status to new Dataloader component

  useEffect(() => {
    if (hash !== "0") {
      switch (operation?.status) {
        case "STATUS.SUCCESS":
          if (isSignedIn) {
            history.push("/");
          } else {
            alert("Login operation error");
            history.push("/login");
          }
          break;

        case "STATUS.FAILURE":
          setHash("0");
          alert(
            "Sorry, there is an internal problem with signing in. Please, try later"
          );
          history.push("/login");
          break;
      }
    }
  }, [hash, operation]);

  return <BeatLoader />;
};
