// Quick test to check if environment variables are loaded
console.log('\n=== EMAIL CONFIGURATION TEST ===\n');

console.log('✓ Checking environment variables...\n');

if (process.env.RESEND_API_KEY) {
    const key = process.env.RESEND_API_KEY;
    if (key === 're_your_api_key_here') {
        console.log('❌ RESEND_API_KEY is still the placeholder value!');
        console.log('   You need to replace it with your actual API key from Resend.\n');
    } else if (key.startsWith('re_')) {
        console.log('✅ RESEND_API_KEY is set and looks valid');
        console.log(`   Key starts with: ${key.substring(0, 10)}...\n`);
    } else {
        console.log('⚠️  RESEND_API_KEY is set but doesn\'t look like a valid Resend key');
        console.log('   Resend keys should start with "re_"\n');
    }
} else {
    console.log('❌ RESEND_API_KEY is NOT set!');
    console.log('   Add it to your .env.local file\n');
}

if (process.env.ADMIN_EMAIL) {
    console.log(`✅ ADMIN_EMAIL is set to: ${process.env.ADMIN_EMAIL}\n`);
} else {
    console.log('⚠️  ADMIN_EMAIL is not set (will use default)\n');
}

console.log('=== NEXT STEPS ===\n');
console.log('1. If API key is missing or placeholder:');
console.log('   - Go to https://resend.com');
console.log('   - Sign up and create an API key');
console.log('   - Add it to .env.local file\n');
console.log('2. After updating .env.local:');
console.log('   - RESTART the dev server (Ctrl+C then npm run dev)');
console.log('   - Environment variables only load on server start\n');
console.log('3. Test the forms:');
console.log('   - http://localhost:3000/contact');
console.log('   - http://localhost:3000/reservation-formation\n');
