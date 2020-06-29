import { create } from "react-test-renderer";
import React from "react";
import ProfileStatusHook from "./ProfileStatusHook";

describe("profileStatus Component component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatusHook status="my test"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("my test");
    });
});