"""
Simple Flask Web Application for CI/CD Demo
This application demonstrates basic REST API endpoints for teaching GitHub Actions
"""

from flask import Flask, jsonify
import os

# Create Flask application instance
app = Flask(__name__)

# Get version from environment variable (useful for deployment tracking)
VERSION = os.getenv('APP_VERSION', '1.0.0')


@app.route('/')
def home():
    """
    Home endpoint - Returns a simple welcome message
    This is the main landing page of our API
    """
    return jsonify({
        'message': 'Hello World! Welcome to CI/CD Demo',
        'version': VERSION,
        'status': 'running'
    })


@app.route('/health')
def health_check():
    """
    Health check endpoint - Used by container orchestrators and load balancers
    to verify the application is running correctly
    
    Returns: JSON with status and version information
    """
    return jsonify({
        'status': 'healthy',
        'version': VERSION
    }), 200


@app.route('/api/greet/<name>')
def greet(name):
    """
    Personalized greeting endpoint
    Demonstrates path parameters in Flask
    
    Args:
        name: The name to greet
    
    Returns: JSON with personalized greeting
    """
    return jsonify({
        'message': f'Hello, {name}!',
        'version': VERSION
    })


# Error handler for 404 - Not Found
@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors with a JSON response"""
    return jsonify({
        'error': 'Endpoint not found',
        'status': 404
    }), 404


if __name__ == '__main__':
    # Run the application
    # 0.0.0.0 makes it accessible from outside the container
    # debug=False for production (should be set via environment variable)
    app.run(
        host='0.0.0.0',
        port=int(os.getenv('PORT', 5000)),
        debug=os.getenv('FLASK_DEBUG', 'False') == 'True'
    )
