import React from "react";
import { shallow } from "enzyme";
import Grade from "./index";

describe("test grade component", () => {
    it("should display the grade card", () => {
        const gradeComponent = shallow(<Grade />);
        expect(gradeComponent.find(".grade")).toHaveLength(1);
    });

    it("should display grade value correctly if its a number between 0 and 5", () => {
        const gradeComponent = shallow(<Grade value={2.4} />);
        expect(gradeComponent.find(".grade-value").props().value).toBe(2.4); 
        expect(gradeComponent.find(".wrong-grade-value")).toHaveLength(0); 
    });

    it("should display grade value correctly if its 0 or 5", () => {
        const gradeCeroComponent = shallow(<Grade value={0} />);
        expect(gradeCeroComponent.find(".grade-value").props().value).toBe(0); 
        expect(gradeCeroComponent.find(".wrong-grade-value")).toHaveLength(0); 

        const gradeFiveComponent = shallow(<Grade value={5} />);
        expect(gradeFiveComponent.find(".grade-value").props().value).toBe(5); 
        expect(gradeFiveComponent.find(".wrong-grade-value")).toHaveLength(0); 
    });

    it("should display error message when value is not a number", () => {
        const gradeComponent = shallow(<Grade value="lorem" />);
        expect(gradeComponent.find(".grade-value").props().value).toBe("lorem"); 
        expect(gradeComponent.find(".wrong-grade-value")).toHaveLength(1); 
        expect(gradeComponent.find(".grade-value").hasClass("error")).toBeTruthy(); 
    });

    it("should display error message when value is out of range", () => {
        const lowGradeComponent = shallow(<Grade value={-3} />);
        expect(lowGradeComponent.find(".grade-value").props().value).toBe(-3); 
        expect(lowGradeComponent.find(".wrong-grade-value")).toHaveLength(1); 
        expect(lowGradeComponent.find(".grade-value").hasClass("error")).toBeTruthy(); 

        const highGradeComponent = shallow(<Grade value={30} />);
        expect(highGradeComponent.find(".grade-value").props().value).toBe(30); 
        expect(highGradeComponent.find(".wrong-grade-value")).toHaveLength(1); 
        expect(highGradeComponent.find(".grade-value").hasClass("error")).toBeTruthy(); 
    });

    it("should display grade weight correctly if its a number between 0 and 100", () => {
        const gradeComponent = shallow(<Grade value={2.4} weight={23} />);
        expect(gradeComponent.find(".grade-weight").props().value).toBe(23); 
        expect(gradeComponent.find(".wrong-grade-weight")).toHaveLength(0); 
    });

    it("should display grade weight correctly if its 0 or 100", () => {
        const gradeCeroComponent = shallow(<Grade value={0} weight={0} />);
        expect(gradeCeroComponent.find(".grade-weight").props().value).toBe(0); 
        expect(gradeCeroComponent.find(".wrong-grade-weight")).toHaveLength(0); 

        const gradeFiveComponent = shallow(<Grade value={5} weight={100} />);
        expect(gradeFiveComponent.find(".grade-weight").props().value).toBe(100); 
        expect(gradeFiveComponent.find(".wrong-grade-weight")).toHaveLength(0); 
    });

    it("should display error message when weight is not a number", () => {
        const gradeComponent = shallow(<Grade value="lorem" weight="ipsum" />);
        expect(gradeComponent.find(".grade-weight").props().value).toBe("ipsum"); 
        expect(gradeComponent.find(".wrong-grade-weight")).toHaveLength(1); 
        expect(gradeComponent.find(".grade-weight").hasClass("error")).toBeTruthy(); 
    });

    it("should display error message when weight is out of range", () => {
        const lowGradeComponent = shallow(<Grade weight={-8} />);
        expect(lowGradeComponent.find(".grade-weight").props().value).toBe(-8); 
        expect(lowGradeComponent.find(".wrong-grade-weight")).toHaveLength(1); 
        expect(lowGradeComponent.find(".grade-weight").hasClass("error")).toBeTruthy(); 

        const highGradeComponent = shallow(<Grade weight={130} />);
        expect(highGradeComponent.find(".grade-weight").props().value).toBe(130); 
        expect(highGradeComponent.find(".wrong-grade-weight")).toHaveLength(1); 
        expect(highGradeComponent.find(".grade-weight").hasClass("error")).toBeTruthy(); 
    });

    it("should display both value and weight", () => {
        const gradeComponent = shallow(<Grade value={3.7} weight={60} />);
        expect(gradeComponent.find(".grade-value").props().value).toBe(3.7); 
        expect(gradeComponent.find(".grade-weight").props().value).toBe(60); 
        expect(gradeComponent.find(".wrong-grade-value")).toHaveLength(0); 
        expect(gradeComponent.find(".wrong-grade-weight")).toHaveLength(0); 
        expect(gradeComponent.find(".grade-value").hasClass("error")).toBeFalsy(); 
        expect(gradeComponent.find(".grade-weight").hasClass("error")).toBeFalsy(); 
    });
})