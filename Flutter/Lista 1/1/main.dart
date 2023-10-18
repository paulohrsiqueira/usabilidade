class Cliente {
  String endereco;
  String nome;
  String telefone;
  String email;

  Cliente(this.nome, this.endereco, this.email, this.telefone);

  
  String toString() {
    return 'Nome: $nome\nEndereço: $endereco\nE-mail: $email\nTelefone: $telefone';
  }
}

class Produto {
  String nome;
  double preco;
  String descricao;

  Produto(this.nome, this.preco, this.descricao);

  
  String toString() {
    return 'Nome: $nome\nPreço: $preco\nDescrição: $descricao';
  }
}

void main() {

  var cliente1 = Cliente('Igor', 'Santa Tereza, 185', 'igorrabreu2010@gmail.com', '31 9 95472863');
  var produto1 = Produto('Computador', 2599.9, 'Computador Gamer 256gb');
  
  print('Informações do Cliente:');
  print(cliente1);
  
  print('\nInformações do Produto:');
  print(produto1);
}