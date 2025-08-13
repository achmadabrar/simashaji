import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

console.log('✅ Dependencies loaded successfully!');

// Test JWT
const token = jwt.sign({ userId: 123 }, 'test-secret', { expiresIn: '1h' });
console.log('🔑 JWT Token generated:', token.length, 'characters');

// Test bcrypt
const hash = bcrypt.hashSync('password123', 10);
console.log('🔒 Password hashed:', hash.length, 'characters');

console.log('🎉 All tests passed!');
