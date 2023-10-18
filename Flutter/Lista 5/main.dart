import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
  home: Home(),
));

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Álbum"),
        backgroundColor: Colors.green,
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: ListView(
          children: <Widget>[
            FotoCard(
              imageUrl: "https://images.pexels.com/photos/213781/pexels-photo-213781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              descricao: "Descrição da Foto 1",
            ),
            FotoCard(
              imageUrl: "https://images.pexels.com/photos/213782/pexels-photo-213782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              descricao: "Descrição da Foto 2",
            ),
            // Adicione mais FotosCards conforme necessário
          ],
        ),
      ),
    );
  }
}

class FotoCard extends StatelessWidget {
  final String imageUrl;
  final String descricao;

  FotoCard({required this.imageUrl, required this.descricao});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: GestureDetector(
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (_) => DescricaoFoto(descricao: descricao),
            ),
          );
        },
        child: Card(
          child: Column(
            children: <Widget>[
              Image.network(imageUrl),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text(descricao),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class DescricaoFoto extends StatelessWidget {
  final String descricao;

  DescricaoFoto({required this.descricao});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Descrição da Foto"),
        backgroundColor: Colors.green,
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Image.network(
            "https://images.pexels.com/photos/213781/pexels-photo-213781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(descricao),
          ),
          ElevatedButton(
            onPressed: () {
              Navigator.pop(context); // Retorna à tela anterior
            },
            child: Text("Retornar"),
          ),
        ],
      ),
    );
  }
}
