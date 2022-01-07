import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.OpenOption;
import java.nio.file.Path;

public class rm {
    public static void main(String[] args) throws IOException {
        File dir = new File("/git/pamir2021/photo/script");
        String[] list = dir.list();
        String indexHtml = Files.readString(Path.of("/git/pamir2021/index.html"));
        for (String file : list) {
            if(file.matches("\\d+\\.sh")){
                String dayNum = file.replace(".sh", "");
                File sh = new File(dir, file);
                String shContent = Files.readString(sh.toPath());
                String[] split = shContent.split("\\s+");
                for (String w : split) {
                    if(w.startsWith("DSC")){
                        if(!indexHtml.contains(dayNum + "/" + w)){
                            shContent = shContent.replace(w, "");
                        }
                    }
                }
                Files.write(sh.toPath(), shContent.getBytes(StandardCharsets.UTF_8));
            }

        }
    }
}
