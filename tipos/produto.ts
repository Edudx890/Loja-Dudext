export interface Produto {
  id_produto: number
  id_categoria: number
  codigo_sku: string
  nome: string
  descricao: string
  preco_custo: number
  preco_venda: number
  preco_promocional: number | null
  tamanho: string
  cor: string
  material: string
  genero: string
  data_cadastro: string
  imagem?: string
}

