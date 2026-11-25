
(async () => {
    const itens = ZoteroPane.getSelectedItems()
        .filter(item => item.isRegularItem());

    if (!itens.length) {
        Zotero.alert(null, "Aviso", "Selecione os trabalhos no Zotero.");
        return;
    }

    const tag = prompt("Informe a etiqueta que deseja adicionar:");

    if (!tag || !tag.trim()) return;

    const etiqueta = tag.trim();
    let adicionados = 0;

    await Zotero.DB.executeTransaction(async () => {
        for (const item of itens) {
            const tags = item.getTags();

            if (!tags.some(t => t.tag === etiqueta)) {
                item.addTag(etiqueta);
                await item.save();
                adicionados++;
            }
        }
    });

    Zotero.alert(
        null,
        "Organização concluída",
        `Etiqueta: ${etiqueta}\n` +
        `Trabalhos selecionados: ${itens.length}\n` +
        `Etiquetas adicionadas: ${adicionados}`
    );
})();
