# Use nginx to serve static HTML
FROM nginx:alpine

# Copy the HTML file to nginx's default serving directory
COPY index.html /usr/share/nginx/html/

# Expose port 80 (nginx default)
EXPOSE 80

# nginx starts automatically with the default configuration
CMD ["nginx", "-g", "daemon off;"]
