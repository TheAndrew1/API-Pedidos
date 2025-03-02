# Usando a imagem oficial do Node.js com a versão LTS
FROM node:20

# Definindo o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiando os arquivos de dependências
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando o restante do código da aplicação
COPY . .

# Expondo a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "start:prod"]