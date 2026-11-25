
(async () => {
    const itens = ZoteroPane.getSelectedItems()
        .filter(item => item.isRegularItem());

    const semNotas = [];
    const comNotas = [];

    for (const item of itens) {
        const titulo = item.getField("title") || "Sem título";

        if (item.getNotes().length === 0) {
            semNotas.push(titulo);
        } else {
            comNotas.push(titulo);
        }
    }

    const linhas = [
        "===== VERIFICAÇÃO DE NOTAS =====",
        "",
        `Total de trabalhos: ${itens.length}`,
        `Com notas: ${comNotas.length}`,
        `Sem notas: ${semNotas.length}`,
        "",
        "===== TRABALHOS SEM NOTAS =====",
        ...semNotas.map(t => `- ${t}`),
        "",
        "===== TRABALHOS COM NOTAS =====",
        ...comNotas.map(t => `- ${t}`)
    ];

    const relatorio = linhas.join("\n");

    const arquivo = await Services.FilePicker.show({
        mode: "save",
        filters: ["txt"],
        defaultName: "trabalhos_sem_notas.txt"
    });

    if (arquivo) {
        await IOUtils.writeUTF8(arquivo, relatorio);
        Zotero.alert(null, "Concluído", "Relatório salvo.");
    }
})();
