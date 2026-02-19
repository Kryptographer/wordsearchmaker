FROM nginx:alpine

# Remove default nginx config and html
RUN rm /etc/nginx/conf.d/default.conf && \
    rm -rf /usr/share/nginx/html/*

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy application files
COPY index.html /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/
COPY generator.js /usr/share/nginx/html/
COPY content-filter.js /usr/share/nginx/html/
COPY templates.js /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/

# Use non-root user for security
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

EXPOSE 8080

# Health check for Synology Container Manager monitoring
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q --spider http://localhost:8080/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
