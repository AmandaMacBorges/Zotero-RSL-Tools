
(async () => {
    const itens = ZoteroPane.getSelectedItems()
        .filter(item => item.isRegularItem());

    const resultados = new Map();
    const semNotas = [];
    const semCriterio = [];

    for (const item of itens) {
        const titulo = item.getField("title") || "Sem título";
        const notas = item.getNotes();
        const encontrados = new Set();

        if (!notas.length) {
            semNotas.push(titulo);
            continue;
        }

        for (const id of notas) {
            const nota = Zotero.Items.get(id);
            if (!nota) continue;

            const texto = Zotero.Utilities.htmlToText(
                nota.getNote()
            );

            const matches = texto.matchAll(
                /^\s*(E\d+)\b/gim
            );

            for (const match of matches) {
                encontrados.add(match[1].toUpperCase());
            }
        }

        if (!encontrados.size) {
            semCriterio.push(titulo);
            continue;
        }

        for (const criterio of encontrados) {
            if (!resultados.has(criterio)) {
                resultados.set(criterio, []);
            }

            resultados.get(criterio).push(titulo);
        }
    }

    const linhas = [
        "===== RELATÓRIO DE EXCLUSÕES =====",
        "",
        `Total selecionado: ${itens.length}`,
        `Total sem notas: ${semNotas.length}`,
        `Total sem critério identificado: ${semCriterio.length}`,
        "",
        "===== QUANTIDADE POR CRITÉRIO ====="
    ];

    const ordenados = [...resultados.keys()].sort(
        (a, b) => Number(a.slice(1)) - Number(b.slice(1))
    );

    for (const criterio of ordenados) {
        linhas.push(
            `${criterio}: ${resultados.get(criterio).length} trabalhos`
        );
    }

    linhas.push("", "===== TRABALHOS POR CRITÉRIO =====");

    for (const criterio of ordenados) {
        linhas.push("", `${criterio}:`);
        for (const titulo of resultados.get(criterio)) {
            linhas.push(`- ${titulo}`);
        }
    }

    linhas.push("", "===== SEM NOTAS ANEXADAS =====");
    semNotas.forEach(t => linhas.push(`- ${t}`));

    linhas.push("", "===== SEM CRITÉRIO IDENTIFICADO =====");
    semCriterio.forEach(t => linhas.push(`- ${t}`));

    const relatorio = linhas.join("\n");

    const arquivo = await Services.FilePicker.show({
        mode: "save",
        filters: ["txt"],
        defaultName: "relatorio_exclusoes.txt"
    });

    if (arquivo) {
        await IOUtils.writeUTF8(arquivo, relatorio);
        Zotero.alert(null, "Concluído", "Relatório salvo.");
    }
})();
