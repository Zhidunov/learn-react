import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

describe("ProfileStatus component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status="STATUS" />);
        const instance = component.getInstance();
        expect(instance.props.status).toBe("STATUS");
    });

    test("After creation <span> should be displayed not emty", () => {
        const component = create(<ProfileStatus status="STATUS" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    
    test("After creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="STATUS" />);
        const root = component.root;
        
        expect(()=>{
            const input = root.findByType("input");
        }).toThrow();
    });

    test("After creation <span> with correct status should be displayed", () => {
        const component = create(<ProfileStatus status="STATUS" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("STATUS");
    });

    test("Input should be displayed in edit mode instead of span", () => {
        const component = create(<ProfileStatus status="STATUS" />);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe("STATUS");
    });

    test("Callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="STATUS" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
})