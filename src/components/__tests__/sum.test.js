import { sum } from "../sum";

test('Sum Function should calculate the sum of 2 numbers', () => { 
    const result=sum(3,4);
    
    // Assertion 
    expect(result).toBe(7);
 })