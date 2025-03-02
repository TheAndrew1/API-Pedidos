# Usando a imagem oficial do Node.js com a versão LTS
FROM node:18

# Definindo o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiando os arquivos de dependências
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando o restante do código da aplicação
COPY . .

# Definindo as variáveis de ambiente
ENV DATABASE_HOST=host.docker.internal
ENV DATABASE_PORT=5433
ENV DATABASE_USER=postgres
ENV DATABASE_PASSWORD=postgres
ENV DATABASE_NAME=api_pedidos

# Expondo a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "start:prod"]