FROM php:7.4-apache

# Install necessary PHP extensions (example: for WordPress)
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Set the working directory to the document root
WORKDIR /var/www/html
