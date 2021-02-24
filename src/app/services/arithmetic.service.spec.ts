import { ArithmeticService } from './arithmetic.service';

describe( 'ArithmeticService', () => {
    it('should add two numbers', () => {
        const arithmetic = new ArithmeticService();
        const result = arithmetic.add(2, 4);
        expect(result).toBe(6);
    })
});