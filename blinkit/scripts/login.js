<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blinkit Login</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f7f7f7;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 1rem;
        }
        .login-card {
            background-color: #fff;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            max-width: 400px;
            width: 100%;
        }
        .blinkit-color {
            color: #1a932d;
        }
        .blinkit-bg {
            background-color: #1a932d;
        }
    </style>
</head>
<body>

    <div class="login-card p-8 rounded-2xl">
        <!-- Message Box -->
        <div id="message-box" class="hidden absolute top-4 left-1/2 -translate-x-1/2 w-80 text-center py-3 px-4 rounded-xl shadow-md transition-all duration-300 transform scale-95 opacity-0">
            <p id="message-text" class="font-medium"></p>
        </div>
        
        <!-- Blinkit Logo/Title -->
        <div class="flex items-center justify-center mb-6">
            <svg class="h-10 w-10 text-white blinkit-bg p-2 rounded-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6.5v9"></path>
                <path d="M16 10.5L8 10.5"></path>
            </svg>
            <h1 class="text-3xl font-bold ml-2 blinkit-color">blinkit</h1>
        </div>

        <h2 class="text-2xl font-semibold text-center text-gray-800 mb-2">Login to your account</h2>
        <p class="text-center text-gray-500 mb-6">Enter your details to get started</p>

        <form id="login-form" class="space-y-4">
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email or Phone</label>
                <input type="text" id="email" name="email" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent" placeholder="Enter your email or phone number" required>
            </div>
            <div>
                <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" id="password" name="password" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent" placeholder="Enter your password" required>
            </div>
            
            <div class="text-right text-sm">
                <a href="#" class="text-gray-500 hover:text-gray-700 transition-colors">Forgot Password?</a>
            </div>

            <button type="submit" class="w-full blinkit-bg text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity">
                Log In
            </button>
        </form>

        <p class="mt-6 text-center text-sm text-gray-500">
            Don't have an account? <a href="#" class="blinkit-color font-semibold hover:underline">Sign Up</a>
        </p>
    </div>

    <script src="login.js"></script>
</body>
</html>
